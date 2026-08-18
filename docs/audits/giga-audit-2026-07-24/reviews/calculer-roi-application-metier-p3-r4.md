# Contre-audit P3 r4 — `calculer-roi-application-metier`

Date : **25 juillet 2026**

Snapshot contrôlé :
`docs/research/manifests/calculer-roi-application-metier-p2-2026-07-25-r4.sha256`.

## Verdict

**GO P3 r4 — 97/100 — P0 : 0 — P1 : 0 — P2 : 0.**

Ce verdict valide le contenu, les calculs, les sorties et les preuves
techniques du snapshot r4. Il ne constitue ni une P4, ni une validation par un
dirigeant externe, ni un GO publication, production ou indexation.

## Preuves rejouées en lecture seule

- 12 fichiers sur 12 correspondent au manifeste r4 ;
- 23 tests ciblés sur 23 réussissent ;
- TypeScript et le lint ciblé sont verts ;
- le contrôle des différences ne signale aucune anomalie de forme ;
- les calculs centraux, seuils, retards et sensibilités ont été refaits ;
- les cas « projet incomplet », « standard incomplet » et « deux options
  incomplètes » neutralisent bien les résultats qui dépendent d'un coût
  inconnu dans la synthèse et le CSV ;
- le registre annonce 32 minutes pour 6 305 mots ;
- l'image Open Graph mesure 1 200 × 630 et ne contient plus de proportion
  arbitraire.

Le modèle applicatif reste correctement versionné
`2026-07-25-r3` : la r4 complète la preuve et les tests, sans modifier une
formule, une donnée initiale ou une sortie applicative.

## Recalcul indépendant du cas fictif

| Résultat | Valeur |
| --- | ---: |
| Charge actuelle sur 48 mois | 113 740,80 € |
| Option standard — bénéfices | 54 216,00 € |
| Option standard — coût | 32 000,00 € |
| Option standard — valeur nette | 22 216,00 € |
| Option standard — ROI simple | 69,425 % |
| Option standard — retour | mois 22 |
| Projet — bénéfices | 59 833,04 € |
| Projet — coût | 54 800,00 € |
| Projet — valeur nette | 5 033,04 € |
| Projet — ROI simple | 9,1844 % |
| Projet — retour | mois 43 |
| Part d'heures pour équilibrer le projet | 54,4101 % |
| Coût initial économique maximal | 41 033,04 € |
| Part d'heures pour égaler le standard | 79,0840 % |
| Retard de 3 mois — valeur nette | 1 907,76 € |
| Retard de 6 mois — valeur nette | -1 217,52 € |
| Horizon 24 mois — valeur nette | -19 969,20 € |
| Coût initial +20 % — valeur nette | -2 166,96 € |

## Grille finale

| Axe | Note /10 |
| --- | ---: |
| Intention de recherche | 10 |
| Décision dirigeant | 9 |
| Pédagogie | 9 |
| Profondeur | 10 |
| Preuve | 10 |
| Comparaison | 10 |
| Calculs | 10 |
| Opinion professionnelle | 10 |
| Conversion | 10 |
| SEO / produit | 9 |
| **Total** | **97/100** |

## Frontières restantes

Le contre-auditeur ne disposait pas d'un navigateur intégré. Une BAT locale a
été réalisée par l'orchestrateur, mais elle n'est pas une preuve indépendante.
La P4 doit encore inclure une lecture par un décideur non technique, le rendu
du snapshot final, puis une décision de publication séparée.

La suite SEO globale reste à 412 contrôles réussis sur 418. Les six échecs
observés concernent le guide `securite-saas-b2b` rouvert et une ancienne
empreinte partagée ; aucun n'est imputé au guide ROI. Ils empêchent néanmoins
un GO global de publication.
