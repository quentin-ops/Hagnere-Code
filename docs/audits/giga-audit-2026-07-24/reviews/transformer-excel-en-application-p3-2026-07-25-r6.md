# Contre-audit froid final R6 — `transformer-excel-en-application`

Date : 25 juillet 2026  
Révision contrôlée : R6  
Relecteur : cellule indépendante `excel_r6_cold_audit`  
Autorité : manifeste P2 R6 du 25 juillet 2026  
Périmètre : intégrité du snapshot, différentiel R5 vers R6, contrat
d'impression, non-régression des cinq corrections R5 et portes techniques
Excel.  
Hors périmètre : réécriture, nouveau rendu PDF, déploiement, production,
sitemap, indexation, commit, push et publication.

Le relecteur n'a écrit aucun code et n'a modifié aucun contenu. Le présent
rapport est le seul fichier créé pendant cette passe.

## 1. Verdict exécutif

**GO pour fermer localement la boucle Excel et passer au guide suivant.**

```text
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Score froid final : 98/100
Manifest R6 : 12/12 OK
Tests Excel : 131/131
Porte de fermeture Excel : franchie
Publication publique : non autorisée par ce verdict
```

R6 corrige le dernier défaut bloquant observé en P4 : le contenu extérieur au
diagnostic n'est plus seulement rendu invisible, il est retiré du flux
d'impression avec `display: none`. Le rapport reste dans le flux utile et la
zone interactive en est exclue.

La preuve physique Chrome fournie par l'agent racine établit 11 pages utiles
sur 11, sans page blanche, avec les cinq dossiers et sans article ni contrôle
interactif. Cette preuve est acceptée comme preuve racine vérifiable ; le
présent contre-auditeur ne prétend ni l'avoir générée ni l'avoir reproduite.

Les cinq corrections R5 sont toujours présentes et couvertes. Aucun nouveau
P0, P1 ou P2 n'a été trouvé. Le statut reste toutefois
`ready-for-human-review` avec `noindex, nofollow` : le GO porte sur la fermeture
locale de ce guide, pas sur sa mise en ligne ni son indexation.

## 2. Autorité et intégrité du snapshot

Manifest contrôlé :

`docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r6.sha256`

SHA-256 du manifeste :

`19223c64973bdbc337bab1444c627f88d265ea1a30c599faef210d05ea59eccd`

Résultat du contrôle physique des empreintes : **12/12 OK**, douze chemins
uniques, aucun doublon.

| Fichier figé                | SHA-256 contrôlé                                                   | État |
| --------------------------- | ------------------------------------------------------------------ | ---- |
| Rapport P3 R4               | `64c441efd56c58073fd2201006df0fffd837bfb51f2758ea1faf6827a5b9858c` | OK   |
| Recherche et journal R6     | `97db5c73e6001b3340f104eedab89f0d143559749b2917685b876141b459e6e6` | OK   |
| Page                        | `00ace546e648d3ee34eeb7086df7145a1ab7620ef220257df79e1472f931ad45` | OK   |
| Image sociale               | `613d396aec5cf70de8b4f1020ddc668c6e23a4856aa14a6d1bccc32c45f207b7` | OK   |
| Composant                   | `e46bfea587a2c49b81b7d44ac274629c34816892d9f61ee6596fbcb30cfce766` | OK   |
| Tests du composant          | `4216dbbc94bf8b68071ecddc8994b4e636d3e03166f9877715627099d32eb328` | OK   |
| Moteur                      | `021b3b8e53a39671b5993d5415622afe97fb073b5e22f1aa21df39d058361de1` | OK   |
| Tests du moteur             | `f2db05992283cf2c5f57a01ff3dbd9d78e603f69d70179b659fead147a6b692b` | OK   |
| Contrat qualité de la route | `da86470a990ce9217eb1486aa8875e67ae74ee2a11367a81e2a0eb2e154babe3` | OK   |
| Horloge locale              | `342cda4701e08dabda0eb3088021546e75bafe20f664349c62522caa0eac3267` | OK   |
| Tests de l'horloge          | `6635c45e8d569ea5c9418e815c006ac2be700fcbb6b4085c6aaeb481e5e54108` | OK   |
| Registre des guides         | `74542cf4bfc1d00fb21587bc87bcb00ba991da4f249701a8ec2f5d26fe827659` | OK   |

Le rapport final n'est volontairement pas inclus dans le manifeste qu'il
audite.

## 3. Différentiel R5 vers R6

La comparaison indépendante des deux manifestes borne le changement à quatre
fichiers :

| Fichier               | R5        | R6        | Lecture froide                                                  |
| --------------------- | --------- | --------- | --------------------------------------------------------------- |
| Journal de recherche  | `2e8acb…` | `97db5c…` | Ajout du reçu R6 et de la preuve racine                         |
| Composant             | `b9d580…` | `e46bfe…` | Remplacement de l'isolation `visibility` par le retrait du flux |
| Test du composant     | `499ff2…` | `4216db…` | Contrat positif `display:none` et refus de l'ancien motif       |
| Contrat qualité route | `568515…` | `da8647…` | Deuxième garde anti-régression                                  |

Les huit autres fichiers sont **bit-à-bit identiques** entre R5 et R6 :
rapport P3 R4, page, image sociale, moteur, tests moteur, horloge, tests
horloge et registre.

Les manifestes sont des listes d'empreintes et non des archives de contenu. Ils
prouvent donc exactement le périmètre et l'identité des fichiers inchangés,
mais ne permettent pas, seuls, de reconstruire un diff textuel intégral des
anciens octets R5. La lecture du code R6, des deux nouveaux contrats et du
journal confirme que les modifications observables restent limitées au défaut
d'impression décrit.

## 4. Vérification du retrait hors diagnostic

La règle active se trouve entièrement dans `@media print` :

```css
body
  *:not(#excel-decision-diagnostic):not(#excel-decision-diagnostic *):not(
    :has(#excel-decision-diagnostic)
  ) {
  display: none !important;
}
```

Sa logique est correcte pour l'arbre de la page :

1. le diagnostic lui-même est exclu par
   `:not(#excel-decision-diagnostic)` ;
2. ses descendants sont exclus par
   `:not(#excel-decision-diagnostic *)` ;
3. chacun de ses ancêtres est exclu par
   `:not(:has(#excel-decision-diagnostic))` ;
4. les autres descendants de `body`, notamment l'article et les frères de la
   chaîne d'ancêtres, reçoivent `display: none !important` et quittent donc le
   flux de pagination ;
5. dans le diagnostic, tous les enfants directs sauf
   `.excel-print-report` sont eux aussi retirés ;
6. boutons, champs, listes, zones de texte et bloc marqué
   `data-excel-interactive` sont masqués explicitement.

Le rapport est un enfant direct :

```text
#excel-decision-diagnostic > .excel-print-report
```

Il reçoit `display: block !important`, un fond blanc et un texte sombre. Le
positionnement absolu du diagnostic le replace au début de la feuille. Le
résultat physique Chrome transmis confirme que cette logique CSS n'est pas
seulement théorique.

## 5. Contrat anti-régression `visibility-only`

Deux tests indépendants exigent la chaîne exacte avec
`display: none !important` :

- test d'interaction du composant ;
- contrat qualité propre à la route.

Les deux refusent également le motif historique :

```css
@media print {
  body * {
    visibility: hidden;
  }
}
```

La garde positive est la plus importante : remplacer le retrait du flux par
une solution fondée seulement sur `visibility` supprime la chaîne exigée et
fait échouer les tests. La garde négative rend en plus explicite la régression
historique.

Le test vérifie aussi l'identifiant scoped, le `<pre>` enfant direct, l'appel à
`window.print`, le masquage des autres enfants et le positionnement du
diagnostic. Les 131 tests relancés incluent ces deux contrats et passent.

## 6. Compatibilité de `:has()` et comportement écran

### 6.1 Support traçable

Le choix est compatible avec les versions modernes des trois moteurs
principaux :

- Chromium a livré `:has()` dans la version 105, selon
  [Chrome for Developers](https://developer.chrome.com/blog/has-m105) ;
- WebKit documente son arrivée dans Safari 15.4 dans
  [les notes Safari 15.4](https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/) ;
- Mozilla documente son activation dans
  [Firefox 121](https://www.mozilla.org/en/firefox/121.0/releasenotes/).

Le dépôt ne déclare pas de matrice minimale de navigateurs. Dans un moteur plus
ancien qui ne comprend pas `:has()`, la première règle d'isolation est ignorée :
le contenu écran reste utilisable, mais l'impression peut de nouveau inclure
l'article en plus du rapport. Il n'existe pas de fallback pour ces anciens
moteurs.

Ce résiduel n'est pas classé P2 dans la présente porte, car :

- la cible P4 explicitement contrôlée est Chrome ;
- le PDF Chrome exact est concluant ;
- les versions actuelles des moteurs majeurs prennent en charge le sélecteur ;
- une absence de support dégrade l'isolation d'impression, sans altérer les
  réponses ni le moteur de décision.

Si une future politique produit exige un ancien WebView, un navigateur figé ou
une version antérieure aux seuils documentés, il faudra soit ajouter un
fallback structurel, soit annoncer la version minimale prise en charge avant
de déclarer cette cible compatible.

### 6.2 Écran

La règle R6 est strictement enfermée dans `@media print`. En mode écran :

- `.excel-print-report` conserve sa classe `hidden` ;
- la grille interactive reste affichée ;
- aucun sélecteur R6 hors media ne masque la page ;
- les cinq tests d'interaction montent le composant, changent de scénario,
  ouvrent des dossiers et trouvent les contrôles attendus.

R6 n'a modifié ni le moteur, ni la page, ni le registre, ni la structure
interactive. Aucun mécanisme plausible de régression écran n'est introduit par
ce diff borné. Cette conclusion est une vérification du code et des tests ; le
présent relecteur ne la transforme pas en nouvelle session navigateur.

## 7. Preuve physique Chrome transmise par l'agent racine

Le journal R6 rapporte explicitement un contrôle « réalisé par l'agent
racine ». Il ne l'attribue pas au rédacteur ni au présent contre-auditeur.

Preuve racine reçue et admise pour cette porte :

```text
PDF A4 : 83 204 octets
Pages : 11
Pages non blanches : 11/11
Pages blanches détectées : []
Texte minimal par page : 429 caractères
Occurrences DOSSIER : 5
DOSSIER 1 à DOSSIER 5 : tous présents
H1 et article éditorial : absents
Copier, Imprimer et Réinitialiser : absents
Pages 1 et 11 rendues et inspectées : lisibles, fin propre
```

La réduction annoncée de 36 pages, dont 25 vides, à 11 pages utiles est
cohérente avec le passage de boîtes invisibles mais présentes dans le flux à
des boîtes réellement supprimées par `display: none`.

Le PDF physique n'est pas un treizième artefact du manifeste R6. La preuve
reste donc une preuve de contrôle racine distincte du gel des douze fichiers,
ce que le journal décrit correctement.

## 8. Non-régression des cinq corrections R5

| Correction R5                               | Vérification R6                                                                                         | État   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------ |
| Temps de lecture                            | Registre à 42 minutes ; statut et robots testés                                                         | Fermée |
| Perte silencieuse au changement de scénario | Formulaire sale détecté, alerte assertive, annulation conservatrice et confirmation destructive testées | Fermée |
| État actif des cinq dossiers                | `aria-pressed` présent et changement d'état testé                                                       | Fermée |
| Noms des justifications X/I à zéro          | Deux libellés visibles et associés à leurs champs                                                       | Fermée |
| Impression isolée                           | Sélecteur R6, contrat anti-`visibility` et PDF Chrome 11/11                                             | Fermée |

Le test du scénario couvre une modification de la date et une modification
interne à l'un des cinq dossiers. Il confirme aussi qu'un diagnostic vierge
change directement de scénario, tandis qu'un diagnostic modifié conserve ses
données tant que l'action destructive n'est pas confirmée.

Les huit empreintes inchangées entre R5 et R6 excluent en outre une modification
silencieuse du moteur, de ses hypothèses, de la page, de l'image sociale, de
l'horloge ou du registre.

## 9. Contrôles techniques reproduits

| Contrôle                                   | Résultat froid R6 |
| ------------------------------------------ | ----------------- |
| Manifeste                                  | **12/12 OK**      |
| Tests moteur                               | 107/107           |
| Tests horloge                              | 2/2               |
| Contrat route                              | 7/7               |
| Tests d'interaction                        | 5/5               |
| Gouvernance des guides                     | 10/10             |
| Total ciblé Excel                          | **131/131**       |
| ESLint ciblé                               | Vert              |
| `tsc --noEmit`                             | Vert              |
| `git diff --check` ciblé                   | Vert              |
| Prettier sur les trois fichiers de code R6 | Vert              |

Le total annoncé est exact :

```text
107 moteur + 2 horloge + 7 route + 5 interaction + 10 gouvernance = 131
```

Un contrôle Prettier élargi au journal Markdown complet signale encore une
différence de forme. Cela ne touche ni l'exécution ni les portes demandées ; la
mention « Prettier ciblé » du journal doit être comprise comme le périmètre des
trois fichiers de code R6, sur lequel le contrôle est bien vert.

## 10. Score froid final

| Axe                          | Note /10 | Motif                                                                 |
| ---------------------------- | -------: | --------------------------------------------------------------------- |
| Intention de recherche       |       10 | Question dirigeant et cinq voies toujours explicites.                 |
| Aide à la décision           |       10 | Protocole, dossiers séparés et droit de ne pas investir préservés.    |
| Pédagogie dirigeant          |        9 | Très guidée, mais le formulaire reste volontairement dense.           |
| Profondeur                   |       10 | Tests, exploitation, sécurité, sortie, TCO et inconnues couverts.     |
| Preuve et exactitude         |       10 | Sources, dates, références, devises et résultats défensifs inchangés. |
| Comparaison à périmètre égal |       10 | Scénario canonique et applicabilité commune préservés.                |
| Originalité et valeur utile  |       10 | Rapport autonome et protocole reproductible réellement exploitables.  |
| Accessibilité et usage       |       10 | Perte silencieuse, états, libellés, copie et impression traités.      |
| Style humain et lisibilité   |        9 | Écriture solide ; quelques zones restent denses par nécessité.        |
| Gouvernance éditoriale       |       10 | Un CTA, temps de lecture cohérent, brouillon noindex explicite.       |

**Total : 98/100.**

Le score ne monte pas artificiellement à 100 : R6 est une correction
d'impression, pas une réécriture des deux axes déjà notés 9 en R4.

## 11. Classement des anomalies et décision

### P0

Aucun.

### P1

Aucun. Le dernier P1 d'impression R5 est fermé par le code, les contrats et la
preuve PDF Chrome.

### P2

Aucun.

### Résiduels non bloquants

- aucune matrice minimale de navigateurs n'est déclarée dans le dépôt ;
- l'isolation d'impression n'a pas de fallback pour un moteur antérieur au
  support de `:has()` ;
- le journal Markdown complet n'est pas entièrement Prettier-clean ;
- production publique, sitemap et indexation ne sont pas contrôlés.

## 12. GO / NO-GO

```text
GO : fermeture locale du guide Excel
GO : passage au guide suivant de la boucle successive
NO-GO : publication ou indexation déduite de ce rapport
```

Décision finale :

**R6 ferme le dernier P1 d'impression ; manifeste 12/12, 131/131 tests,
0 P0, 0 P1, 0 P2, 98/100. La boucle Excel peut être fermée localement et
l'équipe peut passer au guide suivant.**
