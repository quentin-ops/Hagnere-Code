# BAT local R1 — `sla-maintenance-applicative`

Date d’arrêté éditorial : 28 juillet 2026  
Portée : guide, moteur, atelier, classeur, tests et rendu local  
État de publication : **local uniquement**

## Résultat

- Gabarit : `patrimoine-premium`, texte aligné à gauche.
- Corps servi : environ 6 087 mots à partir de 768 px ; 6 368 mots dans la
  représentation mobile qui duplique certains tableaux en cartes accessibles.
- Structure : 15 chapitres décisionnels, 14 portes
  preuve–STOP–conséquence, 10 FAQ et 15 sources officielles.
- Atelier : disponibilité, sept horloges, coût d’incident, RPO, trois
  couvertures et huit domaines de preuve.
- Gate livré : `INCOMPLET`, car les valeurs restent fictives.
- Workbook : 17 feuilles, 90 formules, 15 sources, 8 preuves.
- Validation workbook : 141 scénarios — 8 mutations, 43 adversarial,
  90 sabotages couvrant toutes les formules.
- Rendus workbook : 17/17 PNG inspectés en planche contact.
- Sécurité workbook : 0 macro, 0 lien externe, 0 candidat secret,
  0 erreur de formule.

## Fixtures vérifiées

| Objet | Résultat |
| --- | ---: |
| 99 % sur 30 jours 24/7 | 432 min |
| 99,5 % | 216 min |
| 99,9 % | 43,2 min |
| 99,95 % | 21,6 min |
| 99,99 % | 4,32 min |
| Chronologie | 0, 8, 55, 150, 310, 410, 530 min |
| Coût interne fictif | 1 764 € |
| Rattrapage distinct | 420 € |
| Coût brut fictif | 3 564 € |
| Crédit séparé | 200 € |
| Couverture du crédit | 5,61 % |
| Exposition nette illustrative | 3 364 € |
| RPO | 60 opérations, 4 h, 140 € |
| Couvertures fictives | 31 656 €, 33 828 €, 53 364 € |

## Tests automatisés

- `src/lib/sla-maintenance-decision.test.ts`
- `src/lib/sla-maintenance-guide-quality.test.ts`
- `src/components/guides/SlaMaintenanceDecisionDossier.test.tsx`
- Lot ciblé guide 4 : 73/73.
- `npm run precheck:seo` après intégration : 250/250 sur 9 fichiers.
- ESLint ciblé : 0 erreur et 0 avertissement.
- Build Next.js : compilation réussie et 159/159 pages générées.
- `tsc --noEmit` brut conserve une erreur historique hors lot dans
  `SaasValidationDecisionJournal.test.tsx:241`.

## BAT navigateur réel

Route :
`http://127.0.0.1:3022/guides/sla-maintenance-applicative?qa=final-r3`

Largeurs : `320, 360, 390, 430, 640, 768, 1024, 1280, 1440, 1600`.

- largeur du document égale à la largeur du viewport aux dix points ;
- 0 overflow global ;
- 0 bloc de texte long centré ;
- tableaux mobiles rendus en cartes, tableaux desktop confinés ;
- atelier contenu dans l’article à toutes les largeurs ;
- bouton final désactivé sur l’exemple fictif ;
- aucune erreur Next visible ;
- captures : `output/sla-maintenance-applicative/browser/desktop-1440.png`,
  `mobile-390.png`, `mobile-390-tool.png` et
  `mobile-390-tool-final.png`.

## Téléchargement servi

- URL : `/ressources/kit-sla-maintenance-applicative.xlsx`
- HTTP : `200`
- MIME :
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Taille : `63 918` octets
- SHA-256 servi et public :
  `9e502e0992667c98718767feb309dc230238e4ded16ea117e16cf34d9c0787de`

## Contre-audits indépendants

- Sources et exactitude : `100/100`, aucun P0, P1 ou P2.
- UX, pédagogie et responsive : `97/100`, aucun P0/P1 ; seule réserve,
  l’absence de recalcul par Excel desktop.
- Moteur, classeur et logique de décision : `96/100`, aucun P0/P1 après
  correction et nouveau fuzz de 300 combinaisons numériques hautes.
- Verdict consolidé : `GO_LOCAL_DRAFT`.
- Réserves P2 : pas de recalcul Microsoft Excel réel ; formules non protégées
  dans le fichier, mais les 90 sabotages sont détectés ; quelques entrées
  invalides sont libellées `STOP` dans le classeur et `INCOMPLET` dans le
  moteur, avec export bloqué dans les deux cas.

## Limites obligatoires

- Aucune recalculation réelle par Microsoft Excel n’a été exécutée.
- Les montants, fréquences et niveaux livrés sont fictifs, pas des moyennes de
  marché.
- L’atelier et le classeur ne fournissent ni avis juridique ni niveau de
  service recommandé.
- DORA reste borné aux entités financières dans son champ.
- Les normes ISO, le UK Code, le NIST, le BSI et l’Essential Eight conservent
  leur propre portée.
- Ce BAT ne prouve ni commit, ni push, ni déploiement, ni publication, ni
  indexation.
