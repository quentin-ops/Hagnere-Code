# Contre-audit P3 R11 / moteur R12 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **onzième candidat éditorial, moteur R12, destiné à un nouveau double
contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdicts du gel R11

Deux relecteurs indépendants ont vérifié le manifeste R11 au début et à la fin,
rejoué les défauts antérieurs et cherché de nouveaux contre-exemples :

```text
Audit factuel, juridique et financier : 68/100 — NO-GO P4
P0 : 0 ; P1 : 4 ; P2 : 2

Audit expérience, interface et accessibilité : 72/100 — NO-GO P4
P0 : 0 ; P1 : 2 ; P2 : 3

Manifeste R11 au début et à la fin : 45/45 conforme pour les deux relecteurs
SHA-256 du manifeste R11 :
0fb2e1571c45787e0470ac9f1861b5caa743749c3e34007198db805a8772c21c

Tests ciblés rejoués par les relecteurs : 378/378, 7 fichiers
Décision retenue : 68/100 — NO-GO
```

Ces résultats qualifient le gel R11, pas le présent candidat R12. Après
déduplication et promotion des contournements qui relevaient déjà d’un P1,
l’union conservée comprend **6 P1 et 3 P2 distincts**. R12 corrige ces neuf
défauts sans s’attribuer de note ni de GO.

Le rapport R11 historique et son manifeste n’ont pas été réécrits :

```text
Rapport R11 :
8128d86ffec4c925075dc1f2923c5979f97bc4d1f6cfa6592d0b31653c92de14

Manifeste R11 :
0fb2e1571c45787e0470ac9f1861b5caa743749c3e34007198db805a8772c21c
```

## 2. Fermeture des six P1 R11

| P1 R11                                                                                                                                                                      | Correction R12                                                                                                                                                                                                                                                               | Contre-preuve attendue                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Une URL ELI pouvait être reconnue après transformation NFKC, passage en minuscules ou canonicalisation du chemin.                                                           | La chaîne brute est contrôlée avant toute interprétation : ASCII, HTTPS, autorité exacte et chemin ELI minuscule. Aucun constructeur d’URL ne peut réparer une antislash, un segment parent, un encodage ou un caractère de compatibilité avant la décision.                 | Rejeter chemin majuscule, URL pleine largeur, antislashs, `%2e%2e`, segments `.` ou `..`, double slash, port, identifiants, requête et fragment.                                                                                                                        |
| Une négation, une incertitude ou une seconde référence structurée inconnue pouvaient être ignorées.                                                                         | Le classifieur refuse les marqueurs de négation, réserve ou incertitude et compte toute autre référence structurée, même non reconnue. Les variantes numériques à tiret sont refusées ; seuls les numéros officiels à barre oblique restent admis.                           | Rejeter notamment `Ce n’est pas le règlement 2023/2831`, `À confirmer : 2023/2831 ou CELEX:32014R0651`, `2023/2831 + 1407/2013`, `sans application`, `sauf` et `excepté`.                                                                                               |
| La clé dite exacte fusionnait encore espaces visibles et caractères de compatibilité ; deux entreprises réellement distinctes ne pouvaient pas être confirmées honnêtement. | Le cumul utilise NFC et ignore seulement les espaces extérieurs de saisie. Espaces intérieurs, casse, accents, ponctuation et caractères de compatibilité restent distincts. Chaque observation d’un groupe proche possède désormais un statut de distinction et une preuve. | `Groupe   A`, `Groupe A` et la variante pleine largeur ne doivent jamais fusionner. `Oui` sans preuve bloque ; `Non` demande de recopier la même clé ; toutes les lignes à `Oui` avec preuve conservent des totaux séparés et un avertissement de non-authentification. |
| Une ambiguïté entre deux aides antérieures ciblait le champ de l’aide courante.                                                                                             | Chaque message commence par `Aide courante` ou `Registre, aide N` et distingue le statut de la preuve. Le résumé, le clic, Entrée, `aria-invalid` et `aria-errormessage` convergent vers le contrôle fautif exact.                                                           | Rejouer courant–registre, registre–registre et deux groupes d’ambiguïtés simultanés ; aucune erreur d’une ligne ne doit marquer un autre contrôle.                                                                                                                      |
| Des caractères Unicode invisibles hors du plan multilingue de base scindaient silencieusement une même entreprise.                                                          | Toute propriété Unicode ignorable par défaut, tout caractère de contrôle ou de formatage est refusé sur la saisie brute et signalé avec son point de code.                                                                                                                   | Rejeter explicitement U+200B, U+E0100 et U+E0061, sans total ni fausse ambiguïté.                                                                                                                                                                                       |
| Une variante hors de la fenêtre de trois ans pouvait supprimer le signal d’une observation pertinente.                                                                      | Pour chaque groupe ciblé, la proximité est évaluée après détermination de son ancre et filtrage de sa propre fenêtre.                                                                                                                                                        | Une ligne `Groupe-A` de 2020 ne doit ni bloquer ni supprimer le signal d’une ligne `Groupe A` de 2026 dans la fenêtre applicable.                                                                                                                                       |

## 3. Fermeture des trois P2 R11

| P2 R11                                                                                                                                               | Correction R12                                                                                                                                                                                                                                        | Contre-preuve attendue                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| La grammaire officielle était incohérente : `www` accepté malgré le contrat, mais `data.europa.eu`, les formats ELI et les CELEX consolidés rejetés. | Les seuls hôtes admis sont `eur-lex.europa.eu` et `data.europa.eu`. La grammaire contrôlée couvre journal officiel, langue ISO-3, formats `html`, `pdf` et `xml`, version consolidée par date et CELEX de secteur 0 liés aux trois règlements mappés. | Accepter uniquement les formes officielles prévues ; rejeter `www`, langue à deux lettres, format libre, date impossible et CELEX d’un autre acte. La reconnaissance reste syntaxique et n’authentifie aucune pièce. |
| Après une analyse invalide, le focus passait d’abord par le résultat puis par le résumé d’erreurs.                                                   | Un seul effet choisit la destination finale : résumé si des corrections existent, résultat sinon. Le chargement direct ou confirmé de l’exemple suit le même mécanisme.                                                                               | Espionner le focus sur les deux parcours d’analyse et les deux parcours de chargement : une seule destination finale.                                                                                                |
| Deux cycles identiques « remplir, Vider » pouvaient laisser la seconde annonce vocale silencieuse.                                                   | Chaque annonce porte une séquence DOM monotone sans texte parasite.                                                                                                                                                                                   | Rejouer deux cycles identiques ; le texte reste exact et le nœud de la région live change à chaque action.                                                                                                           |

## 4. Contrat de décision R12

- **Références juridiques** : contrôle de la chaîne brute, une seule forme
  officielle non ambiguë, jamais une URL réparée ou un texte négatif. Les URL
  ELI admises sont en HTTPS sur `eur-lex.europa.eu` ou `data.europa.eu`, avec
  une grammaire fermée. Les CELEX de base ou consolidés et les numéros officiels
  restent limités aux trois règlements explicitement mappés.
- **Limite juridique** : une syntaxe reconnue qualifie seulement la branche de
  précontrôle. Elle n’authentifie ni le document, ni son applicabilité au
  bénéficiaire, ni l’éligibilité du projet.
- **Entreprise unique** : seules les clés exactes après NFC et retrait des
  espaces extérieurs se cumulent. Une clé proche ne somme jamais. Une
  distinction réelle exige une déclaration et une preuve pour chaque
  observation ; les groupes restent alors séparés et l’outil affiche que la
  preuve n’est pas authentifiée.
- **Fenêtre** : le rapprochement des clés proches intervient dans la période de
  trois ans propre à l’ancre du groupe, après exclusion des observations hors
  fenêtre.
- **Accessibilité** : chaque erreur cible la bonne aide, le bon statut ou la
  bonne preuve. Une action provoque un seul déplacement de focus et une
  nouvelle annonce, même si son texte est identique à la précédente.
- **Piste d’audit** : le TXT exporte les statuts et preuves de distinction de
  l’aide courante et de chaque ligne du registre, toujours comme déclarations
  non authentifiées.

La version candidate est :

```text
SITE_AID_DECISION_VERSION = site-aid-decision-r12-2026-07-26
```

## 5. Vérifications du candidat R12

```text
Tests ciblés consolidés : 426/426, 7 fichiers
Tests moteur seuls : 304/304
Tests interface seuls : 42/42
Tests qualité dédiés : 18/18
TypeScript global : conforme
ESLint ciblé : conforme
Prettier ciblé : conforme
Contrôle des espaces et conflits du diff : conforme
Build Next.js direct : conforme
Pages statiques : 159/159
Route du guide : générée
Image sociale du guide : générée
Suite SEO globale : 491/492
Défaut global restant : ancien manifeste P4 de
prioriser-fonctionnalites-mvp-saas sur src/lib/guides.ts
Défaut local aides-creation-site-internet : aucun identifié par ces contrôles
```

Le défaut de gouvernance SEO est antérieur et extérieur au présent guide. Le
build direct compile, contrôle TypeScript et génère les 159 pages. Ces preuves
restent des contrôles P3 : aucun navigateur réel, arbre d’accessibilité,
impression A4 ni métadonnée rendue n’est validé ici.

## 6. Sources primaires de la grammaire juridique

- [EUR-Lex — identifiant européen de la législation](https://eur-lex.europa.eu/content/help/eurlex-content/eli.html?locale=fr) ;
- [EUR-Lex — créer des liens permanents](https://eur-lex.europa.eu/content/help/data-reuse/linking.html?locale=fr) ;
- [EUR-Lex — structure des numéros CELEX](https://eur-lex.europa.eu/content/help/eurlex-content/celex-number.html?locale=fr) ;
- [ELI officiel du règlement général sur `data.europa.eu`](https://data.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole consolidé au 16 décembre 2024](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16) ;
- [règlement pêche et aquaculture consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra).

Les sources françaises, plafonds, calendriers, dispositifs et limites
territoriales restent ceux du dossier de recherche principal. Le benchmark
international demeure limité à la méthode et n’importe aucun droit étranger.

## 7. Porte de sortie

Le présent rapport **ne s’auto-attribue aucune note**. R12 n’obtient un
**GO P4** que si deux nouveaux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les six P1 et trois P2 R11, puis les défauts antérieurs R4 à R10 ;
3. confrontent références, montants, fenêtres et limites aux sources primaires ;
4. recherchent de nouveaux contre-exemples dans les URL, CELEX, textes libres,
   caractères Unicode, clés proches, confirmations, preuves, exports et
   parcours assistifs ;
5. rendent chacun une note sur 100 avec `P0/P1/P2` ;
6. concluent séparément à `P0 = 0`, `P1 = 0` et à l’absence de P2 empêchant une
   expérience premium.

Un éventuel double GO P3 n’autorise toujours ni publication, ni déploiement, ni
indexation. La P4 doit encore prouver le rendu réel aux dix largeurs, le
clavier, les thèmes, l’impression A4, l’image sociale, les métadonnées, le
statut robots et l’absence du sitemap.
