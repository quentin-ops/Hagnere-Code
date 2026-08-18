# Contre-audit P3 R9 / moteur R10 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **neuvième candidat éditorial, moteur R10, remis en double
contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdicts du candidat R9

Deux relecteurs indépendants ont vérifié le manifeste R9 au début et à la fin,
rejoué les défauts antérieurs et cherché de nouveaux contre-exemples :

```text
Audit factuel, juridique et financier : 68/100 — NO-GO P4
P0 : 0 ; P1 : 3 ; P2 : 1

Audit expérience, interface et accessibilité : 68/100 — NO-GO P4
P0 : 0 ; P1 : 3 ; P2 : 1

Manifeste R9 au début et à la fin : 41/41 conforme pour les deux relecteurs
SHA-256 du manifeste R9 :
f0a719182dfd20996f0b206a93f0c3b0c48abff1d3627d49c8f854c69a36d0f7

Décision retenue : 68/100 — NO-GO
```

Après déduplication, l’union conservée dans le registre de recherche comprend
**6 P1 et 2 P2 distincts**. Le présent candidat R10 corrige ces huit défauts
sans s’attribuer de note ni de GO.

## 2. Fermeture des trois P1 factuels R9

| P1 R9                                                                                                                                             | Correction R10                                                                                                                                                                                                                                                                                                               | Contre-preuve attendue                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Un groupe composé uniquement d’aides externes ou inconnues pouvait atteindre 300 000 € sans aucun signal prudent.                                 | Le moteur conserve les montants non qualifiés dans une provenance séparée et signale désormais un « cumul prudent non ventilé entièrement non résolu » dès 300 000 €, même avec une seule ligne. Ce montant est explicitement un repère prudent de revue non universel, jamais un plafond attribué à un règlement.           | Rejouer 299 999,99 €, 300 000 €, 300 001 € et 301 100 €, avec une puis plusieurs lignes. Sous le seuil : aucun faux signal. Au seuil et au-dessus : signal, aucun règlement nommé, validation externe requise. Donnée de groupe, d’État, de date ou de montant manquante : aucun total inventé. |
| Une chaîne telle que `9992023/2831000` pouvait être reconnue par sous-chaîne comme le règlement `2023/2831`.                                      | La reconnaissance juridique utilise un parseur strict, distinct de la normalisation des noms de groupe. Elle accepte seulement un numéro exact et borné, ou ses formes CELEX et ELI officielles exactes ; concaténations, préfixes, suffixes et références réglementaires multiples restent non résolus.                     | Accepter les formes exactes `2023/2831`, CELEX et ELI documentées. Rejeter `9992023/2831000`, les variantes avec chiffres adjacents, les préfixes ou suffixes artificiels et les chaînes qui contiennent plusieurs régimes. Aucune pièce n’est authentifiée par le parseur.                     |
| Un paiement documenté pouvait encore produire une contribution effectivement payée et un coût réalisé lorsque l’octroi juridique restait inconnu. | Toutes les sorties réalisées, y compris la couverture directe, exigent désormais `octroi = oui`, une date d’octroi valide et une chaîne de facture et de paiement cohérente. Les valeurs saisies restent consultables comme déclarations non validées, mais contribution, état reçu, couverture et coût réalisé valent `ND`. | Rejouer `octroi = inconnu`, `non`, date invalide ou absente dans chaque mode de versement. Même avec montant et paiement saisis, aucune sortie réalisée ni couverture finale ne doit apparaître. Avec `oui`, date valide et chaîne complète, les sorties résolues restent disponibles.          |

## 3. Fermeture des trois P1 d’expérience R9

| P1 R9                                                                                                                                                    | Correction R10                                                                                                                                                                                                                           | Contre-preuve attendue                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deux erreurs de « valeur juridique ou ESB manquant » envoyaient vers un champ générique au lieu du montant courant ou de la ligne de registre concernée. | Les codes d’erreur du précontrôle courant et du registre possèdent désormais des cibles explicites et positionnelles. Aucun repli ne déduit la cible du seul mot « montant ».                                                            | Provoquer séparément les deux erreurs, puis activer chaque lien au clavier et à la souris. Le focus doit rejoindre l’unique champ de valeur juridique courant ou le montant exact de l’aide antérieure concernée, avant et après le rendu dynamique. |
| Les contrôles répétés partageaient des noms accessibles tels que « Montant HT » ou « Statut de la base juridique ».                                      | Chaque champ dynamique inclut désormais le numéro de la ligne de devis ou de l’aide antérieure dans son nom accessible. Chaque bloc est également exposé comme groupe nommé et les annonces d’ajout sont numérotées.                     | Avec quatre lignes de devis et deux aides antérieures, interroger l’arbre d’accessibilité : aucun nom de contrôle répété ne doit être ambigu. Ajouter et supprimer des lignes, puis vérifier les annonces et le focus.                               |
| `Groupe-A` et `Groupe A` pouvaient être séparés et masquer un signal de cumul.                                                                           | Une normalisation dédiée au rapprochement des entreprises uniques neutralise prudemment casse, accents, espaces, ponctuation et séparateurs. Elle reste séparée du parseur juridique et n’authentifie jamais l’identité de l’entreprise. | Les variantes typographiques d’un même identifiant doivent rejoindre le même groupe prudent ; deux identifiants réellement distincts ne doivent pas être fusionnés. Rejouer le seuil avec plusieurs ponctuations, accents et espaces.                |

## 4. Fermeture des deux P2 R9

| P2 R9                                                                                                                                               | Correction R10                                                                                                                                                                                                                                                                            | Contre-preuve attendue                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L’écran et le TXT pouvaient présenter trop affirmativement un état ou des montants saisis malgré une chronologie invalide ou une preuve incomplète. | Les sorties visibles et exportées sont séparées en « données déclarées par l’utilisateur — non validées par le moteur » et « calculs résolus ». Une incohérence conserve la saisie pour correction, mais affiche `ND` et n’emploie jamais un libellé de paiement reçu ou de coût réalisé. | Rejouer un paiement antérieur à l’octroi, un octroi inconnu et chaque chaîne incomplète. Comparer cartes, résumé et TXT : aucun état résolu ne doit être affirmé. Rejouer ensuite une chaîne complète valide. |
| Les limites générales de l’outil étaient transformées en faux liens vers une section qui ne permettait pas de les lever.                            | Les limites non actionnables sont désormais du texte simple. Seules les erreurs assorties d’un contrôle précis restent des liens de correction.                                                                                                                                           | Inspecter toutes les limites génériques : aucune ne doit recevoir de rôle lien ni détourner le focus. Vérifier en parallèle que les vraies erreurs de preuve gardent leur action exacte.                      |

## 5. Contrat de décision R10

- **Référence juridique** : seules les formes exactes et bornées reconnues
  orientent le précontrôle ; elles n’authentifient ni la pièce ni
  l’applicabilité du régime.
- **Base non résolue** : aucun montant n’est attribué à un règlement. À partir de
  300 000 € pour un groupe rapprochable, un signal prudent non universel impose
  une revue externe, y compris si aucune ligne n’est reconnue.
- **Entreprise unique** : la ponctuation et les séparateurs sont normalisés pour
  le rapprochement prudent seulement ; l’identité juridique reste à confirmer.
- **Sortie réalisée** : elle exige un octroi positif, une date valide et la
  chaîne complète de facture et de paiement. Sinon, toute sortie dépendante vaut
  `ND`.
- **Traçabilité** : l’écran et le TXT distinguent les saisies non validées des
  calculs résolus.
- **Accessibilité** : toute action cible le seul contrôle capable de corriger
  l’erreur ; tous les champs dynamiques ont un nom unique ; une limite sans
  action reste du texte.

La version testée est
`SITE_AID_DECISION_VERSION = site-aid-decision-r10-2026-07-26`.

## 6. Vérifications du candidat R10

```text
Tests ciblés consolidés : 316/316, 7 fichiers
Tests moteur seuls : 203/203
Tests interface seuls : 35/35
Tests moteur + interface + contrat éditorial : 254/254
Tests qualité dédiés : 16/16
Porte documentaire : 78/78
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

L’écart de gouvernance SEO est antérieur et extérieur à ce guide. Le build
direct compile, contrôle TypeScript et génère les 159 pages, dont la route du
guide et son image sociale.

## 7. Sources primaires à contrôler

- [règlement général (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole 1408/2013 consolidé](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra) ;
- [règlement pêche et aquaculture 717/2014 consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret français 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293) ;
- [circulaire du Premier ministre du 3 mars 2026](https://agriculture.gouv.fr/telecharger/153667).

## 8. Porte de sortie

Le présent rapport **ne s’auto-attribue aucune note**. R10 n’obtient un
**GO P4** que si deux nouveaux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les six P1 et les deux P2 R9, ainsi que tous les défauts R4 à R8 ;
3. confrontent les règles financières et juridiques aux sources primaires ;
4. recherchent de nouveaux contre-exemples, notamment aux seuils, dans les
   références artificielles, les groupes ambigus et toutes les chronologies ;
5. rendent chacun une note sur 100 avec `P0/P1/P2` ;
6. concluent séparément à `P0 = 0`, `P1 = 0` et à l’absence de P2 empêchant une
   expérience premium.

Un éventuel GO P3 n’autorise toujours ni publication ni indexation. La P4 doit
encore prouver le rendu réel aux dix largeurs, le clavier, les thèmes, les
scénarios du formulaire, le TXT, l’impression A4, l’image sociale, les
métadonnées, le statut robots et l’absence du sitemap.
