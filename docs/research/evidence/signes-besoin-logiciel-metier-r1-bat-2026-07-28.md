# BAT local R1 — `signes-besoin-logiciel-metier`

Date d’arrêté éditorial : 28 juillet 2026  
Contrôle final local : 29 juillet 2026  
Portée : guide, moteur, outil web, exports, classeur, tests et rendu local  
État de publication : **local uniquement**

## Résultat

- Gabarit : `patrimoine-premium`, lecture éditoriale alignée à gauche.
- Corps servi : environ 10 594 mots dans l’article desktop après retrait des
  cartes mobiles dupliquant les tableaux ; temps de lecture déclaré : 45 min.
- Structure : 16 chapitres de décision, une section de sources, 10 FAQ,
  12 tableaux convertis en cartes sur mobile et 14 portes pédagogiques.
- Corpus : 26 sources officielles ou primaires, françaises, européennes,
  britanniques, canadiennes, australiennes, américaines et internationales.
- Preuves : 8 domaines canoniques, partagés par la page, le moteur et le
  classeur.
- Outil : trois situations, quatre portes de sécurité, six voies, options,
  TCO 12/36/60, sept jalons de pilote, suivis +30/+90, expiration,
  gouvernance et verrou final.
- Exports : CSV de travail, JSON `schemaVersion: 2` réimportable et classeur
  XLSX.
- Gate livré : `INCOMPLET / BLOQUE`, car l’exemple reste fictif.

Empreintes du corpus :

- sources :
  `7086717f3f73bde9941985852d38937bd24d3800ba0954bca40c0659906553e3` ;
- preuves :
  `c344b205592899634393dc7925eb6083468d561733916dbcc2f190a8e5116def`.

## Corrections issues des contre-audits

- Les sept jalons du pilote sont obligatoires dans le web et le XLSX.
- Les suivis +30 et +90 doivent être exactement datés à partir de J26–J30 ;
  les contournements +1/+2 sont bloqués.
- La décision possède une date d’expiration future, postérieure au suivi +90.
- La borne Excel du 31 décembre 9999 (`2 958 465`) est acceptée ; la série
  `2 958 466` et toute date de pilote hors plage sont bloquées.
- Les entrées invalides et incomplètes convergent vers l’état global
  `INCOMPLET`, tout en conservant le détail `invalidFields` côté web.
- Les routes globales `OBSERVER` et `CORRIGER_STANDARDISER` sont identiques
  dans le moteur et le classeur.
- L’enveloppe JSON est passée au schéma 2 ; une ancienne enveloppe v1 sans
  jalons ni expiration est rejetée avec un message de version explicite.
- Le contrôle XLSX ne prétend plus qu’un pilote seulement documenté est
  « vérifié » : `CTL-16` indique désormais « Plan de pilote documenté ».

## Tests automatisés

- Tests ciblés du guide : 3 fichiers, 42/42 réussis.
- Précontrôle successif des guides : 12 fichiers, 292/292 réussis.
- ESLint ciblé : aucune erreur ni aucun avertissement.
- Build Next.js : compilation réussie et 159/159 pages générées.
- Contrôle SEO global : 1 221/1 223 tests réussis. Les deux échecs restants
  sont antérieurs et hors lot :
  - manifeste historique de `prioriser-fonctionnalites-mvp-saas` désaligné
    avec le fichier partagé `src/lib/guides.ts` ;
  - `automatiser-processus-metier` encore marqué
    `ready-for-human-review`.
- `tsc --noEmit` brut conserve l’erreur historique hors lot
  `SaasValidationDecisionJournal.test.tsx:241` sur un opérande de `delete`.

## BAT navigateur réel

Route :
`http://127.0.0.1:3022/guides/signes-besoin-logiciel-metier`.

Largeurs contrôlées :
`320, 360, 390, 430, 640, 768, 1024, 1280, 1440, 1600`.

- largeur du document égale à celle du viewport : 10/10 ;
- débordement horizontal global : 0/10 ;
- contrôle visible coupé hors d’un conteneur horizontal prévu : 0/10 ;
- bloc narratif centré : 0 occurrence ;
- identifiant HTML dupliqué : 0 occurrence ;
- 12 cartes visibles jusqu’à 640 px, puis 12 tableaux à partir de 768 px ;
- 7 jalons interactifs présents aux dix largeurs ;
- les 7 jalons ouverts simultanément à 320 px affichent 191 contrôles visibles,
  sans débordement ni coupure ;
- inspection visuelle des sections éditoriales et de l’outil à 320 et
  1 024 px : hiérarchie, marges et lecture alignée à gauche intactes ;
- console finale : 0 avertissement et 0 erreur.

## Classeur

- URL : `/ressources/kit-diagnostic-besoin-logiciel-metier.xlsx`
- HTTP : `200`
- MIME :
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Taille : `61 358` octets
- SHA-256 servi, public et output :
  `5d4b2a7c1d9e5ed1f15af574d3f2824bccc8b57f3ab4285b39a9e4f0e82e37b3`
- 13 feuilles, 13 filtres et 13 volets figés.
- 97 formules gouvernées.
- 205 scénarios : 12 mutations, 96 adversariaux et 97 sabotages.
- 26 sources et 8 domaines de preuve réimportés exactement.
- 13/13 rendus PNG produits et contrôlés.
- 0 erreur de formule, macro, liaison externe ou candidat secret.
- Gate final :
  `BLOQUE_EXEMPLE_FICTIF — remplacer et vérifier données, preuves, TCO, responsables et décision humaine`.

## Contre-audits indépendants

- Sources, promesses et transposition internationale : `99/100`,
  `GO_LOCAL_DRAFT`, aucun P0, P1 ou P2.
- Moteur, workbook et logique fail-closed : `98/100`,
  `GO technique local`, aucun P0, P1 ou P2.
- UX, pédagogie, responsive et accessibilité : `97/100`,
  `GO_LOCAL_DRAFT`, aucun P0/P1 et deux P2 de confort :
  - le parcours expert reste dense malgré les sept jalons repliables ; un mode
    express supplémentaire pourrait accélérer une première lecture ;
  - l’annexe de 26 sources reste longue ; un classement repliable par thème
    améliorerait encore son balayage.
- La réserve commune hors finding concerne l’absence déclarée de recalcul dans
  Microsoft Excel réel.

## Limites obligatoires

- Aucune recalculation réelle par Microsoft Excel n’a été exécutée.
- Les montants, situations, dates de pilote et responsables livrés sont
  fictifs ; ils ne constituent ni moyenne de marché ni recommandation.
- Les règles +30/+90 et l’expiration sont des conventions locales du
  dispositif, pas une norme officielle.
- Les référentiels étrangers conservent leur portée propre et ne sont jamais
  présentés comme des obligations françaises.
- Ce BAT ne prouve ni commit, ni push, ni déploiement, ni publication, ni
  indexation.
