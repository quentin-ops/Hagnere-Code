# Vérification ciblée des téléchargements — `migrer-logiciel-metier-sans-interruption`

Date : 25 juillet 2026  
Contrôle : lecture indépendante, puis reproduction locale  
Verdict : **PASS — aucun lien public cassé**

Ce contrôle répond à trois requêtes HTTP 404 observées pendant un test :

- `/ressources/kit-migration-logiciel-metier/01-cadrage/01-fiche-operations-critiques.csv` ;
- `/ressources/kit-migration-logiciel-metier/02-donnees/01-inventaire-des-donnees.csv` ;
- `/ressources/kit-migration-logiciel-metier/05-bascule/01-runbook-bascule.csv`.

Ces chemins ne figurent ni dans la page, ni dans le HTML rendu, ni dans les
tests, ni dans le kit. Ils ne correspondent donc pas à des liens proposés au
lecteur. Les créer pour faire taire la sonde aurait ajouté trois ressources
arbitraires et une seconde nomenclature non documentée.

## Ressources réellement proposées

Les cinq liens visibles dans le guide ont été redemandés au serveur local :

| Ressource                         | Statut local |
| --------------------------------- | -----------: |
| guide                             |          200 |
| kit ZIP complet                   |          200 |
| mode d'emploi                     |          200 |
| inventaire des dépendances vierge |          200 |
| objectifs RPO/RTO/MTD vierges     |          200 |
| décision stop/go vierge           |          200 |

Le ZIP contient une arborescence plate sous
`kit-migration-logiciel-metier/`. Le test spécialisé impose la liste exacte
des 27 fichiers utiles et vérifie que chaque fichier archivé est identique,
octet par octet, à son équivalent public.

## Snapshot contrôlé

- page :
  `53828440d73cfe6bd480f427325c86d896978cdca02e00dfeb821803c398ef56` ;
- ZIP :
  `825d09ca1c5b8dd62f849f3db4ed77b4591db933eed45f2af0acf35297790b4a` ;
- test spécialisé :
  `89a6c007ca46e668e58c34ba756f2310bd6c31efdfa0820e2b8a3e308714a1c9`.

Le test ciblé compte **11/11 contrôles réussis**. Cette vérification locale ne
prouve pas que les mêmes URL sont déjà déployées en production. Si un ancien
document extérieur au dépôt a diffusé l'un des trois chemins inventés, ce
référent extérieur doit être corrigé ou faire l'objet d'une redirection
explicitement documentée ; rien dans l'application courante ne le démontre.
