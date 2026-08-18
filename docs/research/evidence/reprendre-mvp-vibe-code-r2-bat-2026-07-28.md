# BAT local R2 — reprendre un MVP vibe-code

## Statut et périmètre

`GO_LOCAL_DRAFT` sur le candidat gelé par
`docs/research/manifests/reprendre-mvp-vibe-code-r2-candidate-2026-07-28.sha256`.
Ce statut ne vaut ni commit, ni push, ni déploiement, ni publication, ni
indexation. Les valeurs fictives du dossier et du classeur doivent rester
bloquantes tant qu'elles n'ont pas été remplacées, sourcées et attestées.

## Contenu et sources

- 27 faits de plateforme, 37 sources officielles et 9 domaines de preuve.
- 0 identifiant dupliqué, 0 référence manquante et 0 source orpheline.
- Chaque fait est rendu exactement une fois dans cinq groupes.
- Le dossier de recherche, la page et le registre JSON couvrent explicitement
  Lovable, Bolt, v0/Vercel, Supabase, npm et GitHub.
- Les transferts natifs, les copies/reconstructions et les migrations externes
  sont séparés.

## Tests de code

- Vitest ciblé : 3 fichiers, 144 tests réussis.
- ESLint ciblé : réussi.
- `git diff --check` ciblé : réussi.
- Le moteur conserve les inconnues et les STOP, impose l'attestation de
  provenance fictive avant la note finale et exporte un dossier reproductible.

## Classeur

- Hash public/output : `b71bd29d9ff4b00e9ceb5169a09190872023710fc677b39bb7ef98db1ff382d9`.
- Taille : 88 661 octets.
- 17 onglets, 17 filtres, 17 volets figés et 243 cellules de formule.
- 36/36 scénarios réussis : 6 mutations, 10 entrées adversariales et
  20 sabotages.
- La fixture décimale contrôle les 15 sorties TCO contre l'oracle canonique.
- 13 détecteurs de secrets, 8 fixtures positives et 7 textes d'aide négatifs.
- 0 erreur de formule, 0 macro et 0 liaison vers un classeur externe.
- 17/17 rendus PNG produits et contrôlés.
- Livraison locale : HTTP 200, 88 661 octets et MIME exact
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`.
- Aucun recalcul Microsoft Excel réel : génération, réimport, calcul et rendu
  reposent sur `@oai/artifact-tool`.

## BAT navigateur

Route locale : `http://127.0.0.1:3022/guides/reprendre-mvp-vibe-code`.

- Largeurs contrôlées : 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et
  1600 px.
- Débordement horizontal de document : 0/10.
- Texte centré dans les titres, paragraphes, listes, résumés et labels du corps :
  0 occurrence.
- Largeur du corps : de 288 px à 320 px à 760 px sur écran large.
- L'exemple fictif se charge, les exports de brouillon restent possibles et la
  note de décision finale reste désactivée ; la réinitialisation fonctionne.
- Captures gelées à 320, 768, 1440 et 1600 px.

## Limite globale observée

La navigation statique partagée affiche correctement le style Patrimoine, mais
sa bascule de thème et son méga-menu n'ont pas réagi dans cette session locale.
Ce comportement partagé n'est pas présenté comme validé par le BAT du guide et
doit être traité séparément du contenu gelé.
