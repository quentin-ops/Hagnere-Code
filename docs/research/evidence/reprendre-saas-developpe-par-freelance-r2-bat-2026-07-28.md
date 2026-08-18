# BAT local R2 — Reprendre un SaaS développé par un freelance

Date : 28 juillet 2026  
Route contrôlée : `http://127.0.0.1:3018/guides/reprendre-saas-developpe-par-freelance`  
Périmètre : candidat local, non commité, non poussé, non déployé, non publié et
non indexé.

## Résultat

**GO_LOCAL_DRAFT pour le BAT technique et visuel.** Ce résultat ne préjuge pas
du contre-audit indépendant R2.

## Build et tests

- `npx next build` exécuté directement : compilation et TypeScript réussis,
  **159/159 pages statiques** générées.
- Tests propres au guide, intégrés au pré-contrôle SEO : **30/30**.
- `npm run check:seo` : pré-contrôle du guide **30/30**, corpus principal
  **962/964**. Les deux échecs restants sont extérieurs au guide :
  l’empreinte P4 historique de `prioriser-fonctionnalites-mvp-saas` sur
  `src/lib/guides.ts`, puis le statut `ready-for-human-review` déjà présent sur
  `automatiser-processus-metier`.
- ESLint ciblé : aucun défaut.
- `tsc --noEmit` : une seule erreur extérieure au lot, déjà présente dans
  `src/components/guides/SaasValidationDecisionJournal.test.tsx` ligne 241
  (`delete` sur une propriété non optionnelle).
- `git diff --check` ciblé : aucune erreur.

## Page servie

- HTTP **200**, HTML `text/html; charset=utf-8`, **481 197 octets**.
- Canonique :
  `https://hagnere-code.ai/guides/reprendre-saas-developpe-par-freelance`.
- Mesure officielle : **6 462 mots**, **32 minutes** à 200 mots/minute.
- 14 H2, 10 FAQ, 18 scénarios canoniques, un CTA contextuel dans l’article.
- Sommaire continu de 1 à 14 ; la duplication de la section 7 a été supprimée.
- H1, article et outil calculé alignés à gauche ; aucun centrage de l’article.
- Aucun avertissement ni erreur dans la console du navigateur.

## Responsive et thèmes

Largeurs réellement contrôlées, hauteur 900 px :

`320, 360, 390, 430, 640, 768, 1024, 1280, 1440, 1600`.

À chaque largeur :

- `documentElement.scrollWidth === viewport` ;
- `body.scrollWidth === viewport` ;
- H1 en alignement `start` ;
- article dans les limites de la fenêtre ;
- outil présent ;
- trois groupes de calcul avancés fermés par défaut pour réduire la densité
  mobile ;
- tableaux et sommaire utilisent leur propre défilement horizontal sans élargir
  la page.

Thèmes clair et sombre contrôlés. Captures gelées :

- `output/reprendre-saas-developpe-par-freelance/bat/final-320-light.png` —
  SHA-256 `4a6a748a08cb05efbddd0fc82adc951450826e7c80c4bc8918ba6a0e373f536c` ;
- `output/reprendre-saas-developpe-par-freelance/bat/final-1440-light.png` —
  SHA-256 `3566585fe1db955ce28b222dc0192d99ab7327572b13c6dea869d3141aead10b` ;
- `output/reprendre-saas-developpe-par-freelance/bat/final-1440-dark.png` —
  SHA-256 `9e5b6568fd5d732a716324ce49867dfeaabe749e818497b38d5e2a1bb10fdb1e`.

## Outil local

Contrôles navigateur réels :

- état initial `unknown` : `STOP`, exports désactivés ;
- `Passation normale` avec hypothèses valides : `PASS` ;
- branche incident : `STOP` ;
- suppression réelle d’une valeur au clavier (`Meta+A`, `Backspace`) : `STOP`
  et exports désactivés ;
- saisie intermédiaire `12,` conservée à l’écran et routée vers `STOP`, puis
  `12,5` acceptée ;
- intervalle RPO modifié à 3 h, probabilité à 10 % et arrêt à 11 h propagés ;
- seuil probabiliste affiché à 48,14 h ;
- résumé copié localement ;
- CSV généré localement avec l’état réellement saisi ;
- accordéons ouverts et refermés ;
- focus clavier visible sur les contrôles.

Les tests unitaires vérifient en plus que le texte copié et le CSV contiennent
bien l’intervalle 3 h, la probabilité 10 % et l’arrêt 11 h.

## Classeur

- URL : `/ressources/kit-reprise-saas-freelance.xlsx`.
- HTTP **200**, MIME exact
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
  **30 665 octets**.
- SHA-256 public, sortie contrôlée et téléchargement HTTP :
  `724f9bb934e1634b1570f8008558583d389feca82bab284b79c27be242459e6e`.
- Deux réimports, 10 feuilles, 10 fonctions, 18 tests, 18 sources, 20
  contrôles, 5 mutations légitimes, **7 entrées adversariales**, 4 sabotages et
  0 erreur de formule.
- Les valeurs négatives, la probabilité supérieure à 100 %, les compteurs non
  entiers et les valeurs supérieures à la borne conduisent à
  `MODEL STATUS: FAIL`, puis à `STOP` même en branche `PASSATION NORMALE`.
- La feuille `CRITICITE` provient du même dataset canonique que la page ; le RPO
  nul du paiement et le RPO sans objet des alertes sont explicites.
- Les 10 rendus de feuilles ont été régénérés ; la feuille modifiée
  `CRITICITE` et la feuille `CONTROLES` ont été revues après correction.
- Aucun recalcul par Microsoft Excel n’a été réalisé : les preuves portent sur
  le moteur local, les réimports et les formules exportées.
