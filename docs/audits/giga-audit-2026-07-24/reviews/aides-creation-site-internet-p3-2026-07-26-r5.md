# Contre-audit P3 R5/R6 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **cinquième candidat éditorial, moteur R6, remis en double contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdicts du candidat R4

Deux relecteurs indépendants ont vérifié le manifeste R4 au début et à la fin,
rejoué les défauts antérieurs et recherché de nouveaux contre-exemples :

```text
Audit pédagogie, logique et accessibilité : 89/100 — NO-GO P4
P0 : 0 ; P1 : 1 ; P2 : 1

Audit factuel, juridique et financier : 74/100 — NO-GO P4
P0 : 0 ; P1 : 2 ; P2 : 2

Manifeste R4 au début et à la fin : 33/33 conforme pour les deux relecteurs
Décision retenue : 74/100 — NO-GO, conformément au verdict le plus sévère
```

Les anciens défauts sur l'ancre juridique, les alias d'États, les mentions
sectorielles nues, l'alerte inter-régimes, le paiement direct intégral et la
temporisation vocale étaient bien fermés. R4 a toutefois révélé trois P1
distincts et deux P2 à traiter avant toute passe visuelle.

## 2. Fermeture des P1 R4

| Défaut bloquant | Correction R5/R6 | Contre-preuve attendue |
| --- | --- | --- |
| Une simple phrase libre « non de minimis » pouvait encore désactiver le cumul. | Le statut juridique est un choix structuré. Un régime de minimis exige le numéro exact reconnu ; une aide hors de minimis exige une base juridique formelle **et** une référence de preuve distincte. Une phrase nue, incertaine ou « à confirmer » reste inconnue. Une référence exacte à 2023/2831, 1408/2013 ou 717/2014 reste prioritaire sur un texte contradictoire. Le même contrat s'applique au registre. | Rejouer « Régime régional non de minimis à confirmer » et `2023/2831 — non de minimis à confirmer`, avec 299 000 € antérieurs et 2 100 € courants. |
| L'ESB d'un prêt ou d'une garantie pouvait être soustrait comme une subvention réellement versée. | Le moteur distingue désormais le type d'instrument, la valeur juridique ou l'ESB, la contribution financière approuvée pour la facture et le paiement effectif. L'ESB sert uniquement au cumul. Prêt, garantie, allègement et autre instrument restent hors du modèle financier : aucun nominal n'est déduit du coût ou de la trésorerie. | ESB de prêt ou garantie à 20 000 € : cumul réglementaire actif, coût conditionnel non calculé, besoin de trésorerie prudent à la facture TTC. |
| La page réservait le « réalisé » à l'encaissement de l'entreprise. | La page, la FAQ, la frise et les exemples définissent maintenant le réalisé comme un paiement effectivement documenté, versé à l'entreprise **ou payé directement au fournisseur**. | Paiement direct prouvé avec 0 € encaissé par l'entreprise, mais aide effectivement réalisée et preuves correctement nommées. |

## 3. Fermeture des P2 R4

| Défaut important | Correction R5/R6 | Contre-preuve attendue |
| --- | --- | --- |
| Pour un paiement direct incohérent, le moteur exigeait une preuve du reste tandis que l'écran et le TXT affichaient 0 € et la masquaient. | Le moteur expose désormais la couverture intégrale, le reste fournisseur et l'exigence de preuve. L'écran et le TXT consomment ces sorties sans recalcul local. Une donnée incohérente produit `ND` et maintient la preuve visible. | Facture 100 €, aide théorique/approuvée 50 €, paiement saisi 100 € : verdict invalide, reste `ND`, preuve visible, aucune phrase « reste 0 ». |
| Le dossier de recherche restait bloqué sur le candidat R2. | Le dossier identifie le candidat R5/R6 comme non gelé avant le présent manifeste, conserve les deux verdicts R4 et interdit la P4 avant un nouveau double GO. | Vérifier le statut, le registre de lacunes et la porte de sortie sans auto-attribution de note. |

## 4. Contrat de décision R6

Le formulaire distingue quatre données qui ne se remplacent jamais
implicitement :

1. **instrument** : subvention, prêt, garantie, allègement, autre ou inconnu ;
2. **valeur juridique** : montant brut d'une subvention ou ESB communiqué ;
3. **contribution approuvée** : somme que la notification de subvention prévoit
   de payer pour la facture ;
4. **paiement effectif** : somme prouvée comme versée à l'entreprise ou payée
   directement au fournisseur.

Le moteur est la source unique du reste fournisseur. Une couverture intégrale
n'est reconnue que si la facture, la contribution approuvée, le paiement
effectif et leurs preuves sont cohérents. Un reste de 0,01 € conserve donc son
champ de preuve ; un montant supérieur à la facture ou à la contribution
approuvée reste invalide.

## 5. Vérifications du candidat R5/R6

```text
Tests ciblés consolidés : 175/175, 7 fichiers
Tests moteur seuls : 79/79
Tests interface seuls : 22/22
Tests moteur + interface : 101/101
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

Le présent rapport **ne s'auto-attribue aucune note**. R5/R6 n'obtient un
**GO P4** que si deux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les trois P1 et les deux P2 issus de R4 ;
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
