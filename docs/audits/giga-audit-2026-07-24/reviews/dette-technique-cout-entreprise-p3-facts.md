# Contre-audit P3 — `dette-technique-cout-entreprise`

Date : 24 juillet 2026  
Rôle : contre-auditeur indépendant des calculs et des faits  
Mode : lecture seule, aucun commit, push ou déploiement

## Verdict

**GO local.** Aucun P0 ni P1 éditorial, factuel ou arithmétique n’est resté
ouvert sur le guide, son moteur, son calculateur et ses ressources.

La publication globale restait distinctement bloquée au moment du contrôle par
un manifeste P4 obsolète de `prioriser-fonctionnalites-mvp-saas`. Cet incident
de gouvernance n’affectait aucun calcul du guide dette technique.

## Recalcul indépendant

```text
Livraison : 18 × 9 × 68 = 11 016 €/an
Incidents observés : 6 × 7 × 68 = 2 856 €/an
Contournements : 4 × 2 × 46 × 32 = 11 776 €/an
Capacité interne : 25 648 €/an
Trésorerie attribuable : 8 400 €/an
Coût annuel observé : 34 048 €/an
Risque attendu dans l’attente : 20 % × 40 000 = 8 000 €/an
Opportunité fictive : 3 200 €, hors classement
```

| Horizon | Attendre | Stabiliser | Rénover | Standard | Réécrire | Minimum |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| 12 mois | 42 048,00 € | 54 526,40 € | 89 562,00 € | 103 716,80 € | 169 207,20 € | Attendre |
| 36 mois | 126 144,00 € | 105 979,20 € | 120 586,00 € | 190 750,40 € | 197 821,60 € | Stabiliser |
| 60 mois | 210 240,00 € | 157 432,00 € | 151 610,00 € | 277 784,00 € | 226 436,00 € | Rénover |

À 36 mois :

- trésorerie seule : attendre 25 200 € ; stabiliser 51 660 € ;
- trésorerie et capacité : attendre 102 144 € ; stabiliser 93 979,20 € ;
- avec risque attendu : attendre 126 144 € ; stabiliser 105 979,20 € ;
- seuil de stabilisation sans risque : 28 000 €/an ;
- seuil de stabilisation avec risque : 19 111,11 €/an.

La sensibilité proportionnelle donne les minima documentés : attendre à
12 000 €/an, stabiliser à 34 048 €/an, rénover à 80 000 €/an et réécrire à
300 000 €/an. Les coûts de projet, coûts récurrents, probabilités et impact
restent fixes dans ce test.

## Sources et limites rouvertes

Le contre-audit a rouvert les sources primaires décisives : SEI, DORA, GOV.UK,
GAO, Green Book, CNIL et Australian Cyber Security Centre. Les dates, pays et
périmètres sont visibles dans la page. Aucun de ces documents n’est présenté
comme un barème universel pour une PME française.

## Preuves techniques

- tests ciblés : **46/46 réussis** sur quatre fichiers ;
- lint : réussi ;
- TypeScript : réussi ;
- `git diff --check` : réussi ;
- suite globale lors du contrôle : **558/559**, avec l’unique échec de
  manifeste externe indiqué plus haut.

Snapshot de la page relu après la dernière correction typographique :
`4ce4b2ba11b6837ef91aa47c4564f94e48e43879a7abefdad786ef16179e478c`.

