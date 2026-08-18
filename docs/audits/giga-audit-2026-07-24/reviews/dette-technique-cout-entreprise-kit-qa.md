# Contrôle du dossier téléchargeable — dette technique

Date : 24 juillet 2026  
Rôle : contrôle indépendant de l’utilité et de la reproductibilité du kit  
Mode : lecture seule

## Verdict

**GO local.** Les deux P1 détectés lors du premier contrôle ont été corrigés :
la probabilité d’incident et le coût annuel observé disposent maintenant de
colonnes numériques dédiées dans l’exemple.

## Inventaire et structure

| Fichier | Structure vérifiée | Rôle |
| --- | --- | --- |
| `mode-emploi.md` | version, date, dictionnaire, formules et format CSV | expliquer la méthode et l’import |
| `registre-evenements.csv` | 16 colonnes × 11 lignes | relever dix événements sans doublon |
| `exemple-atelier-nova.csv` | 16 colonnes × 13 lignes | refaire le cas chiffré |
| `comparatif-options.csv` | 25 colonnes × 6 lignes | comparer cinq options à 12/36/60 mois |
| `decision-record.md` | modèle vierge et exemple rempli | archiver le choix, ses inconnues et sa révision |

L’ordre est identique partout : attendre, stabiliser, rénover, standard,
réécrire. Les totaux correspondent exactement au moteur et à la page.

## Garde-fous confirmés

- séparation entre trésorerie, capacité, risque et opportunité ;
- opportunité hors classement ;
- coûts inconnus jamais remplacés par zéro ;
- réduction de trésorerie et réduction de capacité distinctes ;
- règle anti-double comptage et identifiants d’événements ;
- UTF-8, séparateur point-virgule et virgule décimale documentés ;
- fichiers accessibles sans compte ni formulaire.

Le contrôle ciblé des ressources a réussi : **23/23 tests**.

## Frontière de publication

Le kit local est validé. La production observée pendant l’audit restait
ancienne et les cinq nouvelles ressources répondaient 404. Ce constat est un
incident de déploiement distinct : il ne sera fermé qu’après publication
autorisée et relecture des URLs publiques.

